/**
 * Copyright (C) OneBi Sp. z o.o. All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Created by Maciej Józefowski, 05.07.16
 */

Template.mainClickable.onCreated(function () {
    this.data = Template.currentData();
    this.selectedItem = new ReactiveVar("")
    this.templateId = new ReactiveVar();


})

Template.mainClickable.onRendered(function () {

    $('.iconClickable').first().click();

    howManyBlocks($('.blocks-container'), $('.main-clickable').css('paddingLeft'),$('.single-block'),63.25);

    hideOrShowArrows($('.left-arrow-blocks'),$('.right-arrow-blocks'),$('.blocks-container'),$('.blocks-inner-container'));


})

Template.mainClickable.helpers({
    myTemplate: function () {
        return "subClickable"
    },
    templateData: function () {
        var ti = Template.instance();
        return ti.selectedItem.get();
    },
    icons: function () {
        var ti = Template.instance();
        var id = ti.data._id;
        var clickable = ClickableItemsTemplate.findOne({mainTemplate:id});
        var icons = clickable.icons
        console.log(icons)
        return icons;
    },
    showIcon: function () {
        var ti = Template.instance();
        return ti.data.showIcon;
    }
})

Template.mainClickable.events({
    
    "click .iconClickable": function (e,t) {
        var id = $(e.target).attr('id')
        t.selectedItem.set(id)
    },
    "click .single-block": function (e) {
        $('.single-block').removeClass('active-element');
        $(e.target).parent('div').addClass('active-element');
    },

    "click .right-arrow-blocks": function (){
        divSliderArrow("right",$('.blocks-container'),$('.blocks-inner-container'));
    },

    "click .left-arrow-blocks": function (){
        divSliderArrow("left",$('.blocks-container'),$('.blocks-inner-container'));
    },
    
})


//OBLICZA ILE BLOKÓW MIEŚCI SIĘ W KONTENERZE
//IN container - obiekt jquery np $('.container'), kontener wewnątrz którego jest slider | containerBorder - suma paddingów i marginów konteneru |
//   block - obiekt jquery np. $('.single-block') | blockBorer suma paddingów i marginów pojedyńczego bloku
function howManyBlocks(container, containerBorder, block, blockBorder){

    var contenerWidth = $('.main-clickable').width();
    var blockWidth = block.width() + blockBorder;

    var howManyBlocks =parseInt(contenerWidth/blockWidth) * blockWidth;

    container.css('width', howManyBlocks);
}

/* PRZEŁĄCZANIE SLIDE'ÓW Z DIVAMI
IN SIDE: "LEFT" or "RIGHT" - W KTÓRĄ STRONĘ MAJĄ BYĆ PRZEŁĄCZONE SLIDE'Y | CONTAINER - OBIEKT JQUERY. GŁÓWNY KONTENER BLOKÓW |
INNERCONTAINER - OBIEKT JQUERY, WEWNĘTRZNY KONTENER BLOKÓW
 */
function divSliderArrow(side, container, innerContainer){

    var containerWidth = container.width();

    var allBlocksWidth = innerContainer.width();

    var currentTransform = '"' + innerContainer.css("transform").split(',')[4] + '"';
    currentTransform = parseInt(currentTransform.substring(2, currentTransform.length - 1));

    if(side=="right") {

        var increasedWidth = 163.25 - currentTransform;

        var widthContainer = "translate(-" + increasedWidth + "px)";

        if (allBlocksWidth - containerWidth > increasedWidth + 163.25)
            innerContainer.css('transform', widthContainer);

        else {
            var restBlocks = "translate(-" + (allBlocksWidth - increasedWidth + increasedWidth - containerWidth) + "px)";
            innerContainer.css('transform', restBlocks);
        }
        console.log(currentTransform);
    }
    else if (side=="left"){


        var increasedWidth = 163.25 + currentTransform;

        var widthContainer = "translate(" + increasedWidth + "px)";

        if(currentTransform < -163.25)
            innerContainer.css('transform',widthContainer);

        else{
            innerContainer.css('transform','translate(0)');
        }

    }
    else {
        console.log("WRONG SIDE PROPERTY IN sliderArrow FUNCTION. POSSIBLE OPTIONS: LEFT / RIGHT (AS STRING TYPE)");
    }
}

/*FUNKCJA SPRAWDZA CZY WYSWIETLAC STRZALKI DO SLIDERA BLOCZKÓW
IN leftArrow/rightArrow - obiekty jquery, buttony do przełączania slide'ów |
container - obiekt jquery, główny kontener slider'a |
innerContainer - obiekt jquery, wewnętrzny kontener clidera
 */
function hideOrShowArrows(leftArrow, rightArrow, container, innerContainer){

    if(container.width() + 150 >= innerContainer.width()){
        leftArrow.hide();
        rightArrow.hide();
    }
    else
    {
        leftArrow.show();
        rightArrow.show();
    }

}


$(window).on('resize', function() {

        howManyBlocks($('.blocks-container'),0,$('.single-block'),63.25);

        $('.blocks-inner-container').css('transform','translate(0)');

        hideOrShowArrows($('.left-arrow-blocks'),$('.right-arrow-blocks'),$('.blocks-container'),$('.blocks-inner-container'));

});