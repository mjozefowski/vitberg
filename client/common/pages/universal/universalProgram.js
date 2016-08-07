/**
 * Created by SkylinR on 03.08.2016.
 */

Template.universalProgram.onCreated(function () {

})

Template.universalProgram.onRendered(function () {

    howManyBlocks($('.slider-blocks-program'),0,$('.single-block'),63.25);

    hideOrShowArrows($('.left-arrow-programs'),$('.right-arrow-programs'),$('.slider-blocks-program'),$('.slider-blocks-inner-program'));

})

Template.universalProgram.helpers({

})

Template.universalProgram.events({

    "click .right-arrow-programs": function (){
        divSliderArrow("right",$('.slider-blocks-program'),$('.slider-blocks-inner-program'));
    },

    "click .left-arrow-programs": function (){
        divSliderArrow("left",$('.slider-blocks-program'),$('.slider-blocks-inner-program'));
    },

})

//OBLICZA ILE BLOKÓW MIEŚCI SIĘ W KONTENERZE
//IN container - obiekt jquery np $('.container'), kontener wewnątrz którego jest slider | containerBorder - suma paddingów i marginów konteneru |
//   block - obiekt jquery np. $('.single-block') | blockBorer suma paddingów i marginów pojedyńczego bloku
function howManyBlocks(container, containerBorder, block, blockBorder){

    var contenerWidth = $('.program-blocks-slider-container').width() - 100;
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

        if(currentTransform < -326.5)
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

    howManyBlocks($('.slider-blocks-program'),0,$('.single-block'),63.25);

    $('.slider-blocks-inner-program').css('transform','translate(0)');

    hideOrShowArrows($('.left-arrow-programs'),$('.right-arrow-programs'),$('.slider-blocks-program'),$('.slider-blocks-inner-program'));

});