import { render, screen } from '@testing-library/vue'
import AppTooltip from '@/components/base/AppTooltip.vue'
import userEvent from '@testing-library/user-event'

const text = 'Text tooltip'
const buttonText = 'Text button'
const button = `<button>${buttonText}</button>`
const user = userEvent.setup()

function renderTooltip(text = '', target = '') {
    const options = {
        props: {
            tooltip: text,
        },
        slots: {
            default: target,
        },
    }
    return render(AppTooltip, options)
}

function hoverOnTargetElement() {
    const targetEl = getTargetElement()
    if (targetEl) {
        return user.hover(targetEl)
    }
}

function moveCursorFromTargetElement() {
    const targetEl = getTargetElement()
    if (targetEl) {
        return user.unhover(targetEl)
    }
}

function clickOnTargetElement() {
    const targetEl = getTargetElement()

    if (targetEl) {
        return user.click(targetEl)
    }
}

function getTargetElement() {
    return screen.getByText(buttonText).parentElement
}

function assertTooltipHidden() {
    expect(screen.getByText(text)).not.toBeVisible()
}

function assertTooltipVisible() {
    expect(screen.getByText(text)).toBeVisible()
}

describe('rendering', () => {
    it('render with hidden text', () => {
        renderTooltip(text)

        assertTooltipHidden()
    })

    it('render with target element', () => {
        renderTooltip(text, button)

        expect(screen.getByText(buttonText)).toBeVisible()
    })
})

describe('showing', () => {
    it('show after hovering on target', async () => {
        renderTooltip(text, button)

        await hoverOnTargetElement()

        assertTooltipVisible()
    })
})

describe('hiding', () => {
    beforeEach(async () => {
        renderTooltip(text, button)

        await hoverOnTargetElement()

        assertTooltipVisible()
    })

    it('hide after moving cursor away from target', async () => {
        await moveCursorFromTargetElement()

        assertTooltipHidden()
    })

    it('hide after click on target', async () => {
        await clickOnTargetElement()

        assertTooltipHidden()
    })
})
