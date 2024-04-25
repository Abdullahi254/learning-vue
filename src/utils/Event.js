const events = new Map()

export default {
    $on(eventName, fnc) {
        if (!events.has(eventName)) {
            events.set(eventName, [])
        }
        events.get(eventName).push(fnc)
    },
    $emit(eventName, data) {
        if (events.has(eventName)) {
            events.get(eventName).forEach(func => func(data))
        }
    },
    $off(eventName, func) {
        throw {
            message: "Not Implemented"
        }
    }
}