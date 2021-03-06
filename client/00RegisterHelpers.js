/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 02.07.16
 */


Template.registerHelper('dateFix',function(date, locale) {
    return moment(date).locale(locale).format('D.M.YYYY');
});

Template.registerHelper('log',function(data) {
    console.log(data)
});


