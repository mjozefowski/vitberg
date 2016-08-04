/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 18.06.16
 */

Meteor.startup(function () {


    TemplatesForMainClickable.remove({})
    MainPage.remove({})
    ClickableItemsTemplate.remove({})
    Categories.remove({});
    SubCategories.remove({});
    News.remove({});
    Meteor.users.remove({})
    Markers.remove({});
    Notifications.remove({})
    NotificationsUser.remove({})

    var main = MainPage.insert({type:'mainClickable',visible:true, showIcon:false, order:30});
    var clickable = ClickableItemsTemplate.insert({mainTemplate:main});
    var subClickable = TemplatesForMainClickable.insert({text:"Praesent turpis. Sed fringilla mauris sit amet nibh. Fusce convallis metus id felis luctus adipiscing.   Nullam tincidunt adipiscing enim. Ut a nisl id ante tempus hendrerit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", useCase:['Lorem ipsum','Dolor amet','Labore dolore','Tempor insididunt']})
    var subClickable2 = TemplatesForMainClickable.insert({text:"Nullam tincidunt adipiscing enim. Ut a nisl id ante tempus hendrerit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent turpis. Sed fringilla mauris sit amet nibh. Fusce convallis metus id felis luctus adipiscing", useCase:['Dolor amet','Lorem ipsum','Tempor insididunt','Labore dolore','Labore dolore']})
    var subClickable3 = TemplatesForMainClickable.insert({text:"Praesent turpis. Sed fringilla mauris sit amet nibh. Fusce convallis metus id felis luctus adipiscing.   Nullam tincidunt adipiscing enim. Ut a nisl id ante tempus hendrerit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.", useCase:['Labore dolore','Tempor insididunt','Lorem ipsum','Dolor amet','Labore dolore','Tempor insididunt']})


    var icon = {
        image:"/temp/clickable1.png",
        templateId:subClickable
    }
    var icon2 = {
        image:"/temp/clickable2.png",
        templateId:subClickable2
    }
    var icon3 = {
        image:"/temp/clickable3.png",
        templateId:subClickable3
    }
    var icon4 = {
        image:"/temp/clickable1.png",
        templateId:""
    }
    var icon5 = {
        image:"/temp/clickable2.png",
        templateId:""
    }
    var icon6 = {
        image:"/temp/clickable3.png",
        templateId:""
    }

    ClickableItemsTemplate.update(clickable,{$addToSet:{icons:icon}});
    ClickableItemsTemplate.update(clickable,{$addToSet:{icons:icon2}});
    ClickableItemsTemplate.update(clickable,{$addToSet:{icons:icon3}});
    ClickableItemsTemplate.update(clickable,{$addToSet:{icons:icon4}});
    ClickableItemsTemplate.update(clickable,{$addToSet:{icons:icon5}});
    ClickableItemsTemplate.update(clickable,{$addToSet:{icons:icon6}});

    for(var i=0;i<3;i++){
        var text = "Kategoria" + ' ' + i;
        var id = Categories.insert({name:text});
        for(var j=0;j<2;j++){
            var text2 = "Podkategoria" + ' ' + j;
            SubCategories.insert({categoryId:id,name:text2});
        }
    }
    var user;
    user = Accounts.createUser({
        username: 'admin',
        email: 'admin@onebi.eu',
        password: 'adminonebi'
    })

    Roles.addUsersToRoles(user, "admin");


    user = Accounts.createUser({
        username: 'editor',
        email: 'editor@onebi.eu',
        password: 'editoronebi'
    })

    Roles.addUsersToRoles(user, "editor");

    user = Accounts.createUser({
        username: 'contractor',
        email: 'contractor@onebi.eu',
        password: 'contractoronebi'
    })

    Roles.addUsersToRoles(user, "contractor");

    for(var i=0;i<10;i++){
        News.insert({title:"Aenean imperdiet. Phasellus accumsan cursus.", text:'Tekst aktualności ' + i, authorId:user, date:new Date(), isImportant:false, isSmall: i%2!=0, media:["/photos/galeria1.jpg"], video:"https://www.youtube.com/embed/H_1eii4RngI", additionalText:"Lorem ipsum dolor fajny mamy kolor"})

    }
    for(var i=0;i<4;i++){
        News.insert({text:'Tekst aktualności ' + i, authorId:user, date:new Date(), isImportant:true, isSmall: i%2!=0, media:["/photos/galeria1.jpg"]});
        News.insert({text:'Tekst aktualności ' + i, authorId:user, date:new Date(), isImportant:true, isSmall: i%2!=0, video:"https://www.youtube.com/embed/H_1eii4RngI"});

    }

})