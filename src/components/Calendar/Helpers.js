export const getDaysInMonth = (month, year) => {
    const daysInMonth = new Date(year, month, 0).getDate()
    const daysArray = []

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month - 1, day)
        const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' })
        const dateString = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        })

        daysArray.push({ dayOfWeek, dateString })
    }

    return daysArray
}

export const getMonthName = monthNumber => {
    var returnObject = {}

    switch (monthNumber) {
        case 0:
            returnObject = {
                short: 'jan',
                long: 'january'
            }
            break
        case 1:
            returnObject = {
                short: 'feb',
                long: 'february'
            }
            break
        case 2:
            returnObject = {
                short: 'mar',
                long: 'march'
            }
            break
        case 3:
            returnObject = {
                short: 'apr',
                long: 'april'
            }
            break
        case 4:
            returnObject = {
                short: 'may',
                long: 'may'
            }
            break
        case 5:
            returnObject = {
                short: 'jun',
                long: 'june'
            }
            break
        case 6:
            returnObject = {
                short: 'jul',
                long: 'july'
            }
            break
        case 7:
            returnObject = {
                short: 'aug',
                long: 'august'
            }
            break
        case 8:
            returnObject = {
                short: 'sep',
                long: 'september'
            }
            break
        case 9:
            returnObject = {
                short: 'oct',
                long: 'october'
            }
            break
        case 10:
            returnObject = {
                short: 'nov',
                long: 'november'
            }
            break
        case 11:
            returnObject = {
                short: 'dec',
                long: 'december'
            }
            break
    }

    return returnObject
}