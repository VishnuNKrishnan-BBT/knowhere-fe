export const getDaysInMonth = (year, month) => {
    const startDate = new Date(year, month, 1)
    const endDate = new Date(year, month + 1, 0)

    const daysInMonth = []
    const currentDate = startDate

    while (currentDate <= endDate) {

        const currentDateObj = new Date(currentDate)

        const day = {
            date: currentDateObj.getDate(),
            month: currentDateObj.getMonth(),
            year: currentDateObj.getFullYear(),
            dayIndex: currentDateObj.getDay(),
            dayName: getDayName(currentDateObj.getDay())
        }

        daysInMonth.push(day)

        currentDate.setDate(currentDate.getDate() + 1)
    }

    return daysInMonth
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

export const getDayName = dayNumber => {

    if (isNaN(dayNumber) || dayNumber < 0 || dayNumber > 6) {
        const errorMessage = 'dayNumber should be a number in the range 0-6.'
        console.error(errorMessage)

        return {
            status: 'fail',
            message: errorMessage,
            data: null
        }
    }

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    return daysOfWeek[dayNumber]
}