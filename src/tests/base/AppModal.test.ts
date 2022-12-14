import { render, screen } from '@testing-library/vue'
import AppModal from '@/components/base/AppModal.vue'
import { waitForElementToBeRemoved } from '@testing-library/dom'
import userEvent from '@testing-library/user-event'

const user = userEvent.setup()
const body = 'default slot body'

function renderAppModal(body = '', footer = '', isCloseButton = false) {
    const config = {
        props: {
            isShowButtonClose: isCloseButton,
        },
        slots: {
            default: body,
            footer,
        },
    }

    render(AppModal, config)
}

function assertModalClosed(body = '') {
    return waitForElementToBeRemoved([screen.queryByText(body), screen.queryByTestId('app-shadow')])
}

describe('rendering', () => {
    it('render with body and footer', () => {
        const footer = 'slot footer body'

        renderAppModal(body, footer)

        screen.getByText(body)
        screen.getByText(footer)
    })

    it('render with close button', () => {
        const isCloseButton = true

        renderAppModal('', '', isCloseButton)

        screen.getByTestId('app-button')
        screen.getByTestId('icon-close')
    })

    it('render without close button', () => {
        const isCloseButton = false

        renderAppModal('', '', isCloseButton)

        expect(screen.queryByTestId('app-button')).toBeNull()
    })
})

describe('closing', () => {
    it('close on click button close', () => {
        const isCloseButton = true
        renderAppModal(body, '', isCloseButton)

        user.click(screen.getByTestId('app-button'))

        return assertModalClosed(body)
    })

    it('close on click overlay', () => {
        renderAppModal(body)

        user.click(screen.getByTestId('app-shadow'))

        return assertModalClosed(body)
    })

    it('close on click cancel button', () => {
        const cancelButton = `
        <template #footer="{ close }">
            <button @click="close">Отмена</button>
        </template>`
        renderAppModal(body, cancelButton)

        user.click(screen.getByRole('button', { name: 'Отмена' }))

        return assertModalClosed(body)
    })

    it('close on press ESC key', () => {
        renderAppModal(body)

        screen.getByRole('dialog').focus()
        user.keyboard('{Esc}')

        return assertModalClosed(body)
    })
})
