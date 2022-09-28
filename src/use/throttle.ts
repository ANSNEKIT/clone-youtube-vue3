type Callback = (...args: any[]) => void

export function throttle(cb: Callback, timeout: number) {
    let timer: null | ReturnType<typeof setTimeout> = null

    return function (...args: any[]) {
        if (timer) return

        timer = setTimeout(() => {
            cb(...args)

            if (timer) {
                clearTimeout(timer)
            }
            timer = null
        }, timeout)
    }
}
