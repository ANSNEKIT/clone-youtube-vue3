import { render, screen } from '@testing-library/vue'
import AppModal from '@/components/base/AppModal.vue'
import { fireEvent, waitForElementToBeRemoved } from '@testing-library/dom'

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

it('render with body and footer', () => {
    const body = 'default slot body'
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

it('close on click button close', () => {
    const body = 'default slot body'
    const isCloseButton = true
    renderAppModal(body, '', isCloseButton)

    fireEvent.click(screen.getByTestId('app-button'))

    return assertModalClosed(body)
})

it('close on click overlay', () => {
    const body = 'default slot body'
    renderAppModal(body)

    fireEvent.click(screen.getByTestId('app-shadow'))

    return assertModalClosed(body)
})

it('close on click cancel button', () => {
    const body = 'default slot body'
    const cancelButton = `<template #footer="{ close }">
        <button @click="close">Отмена</button>
    </template>`
    renderAppModal(body, cancelButton)

    fireEvent.click(screen.getByRole('button', { name: 'Отмена' }))

    return assertModalClosed(body)
})

it('close on press ESC key', () => {
    const body = 'default slot body'
    renderAppModal(body)

    fireEvent.keyDown(screen.getByRole('dialog'), { key: 'Esc' })

    return assertModalClosed(body)
})
