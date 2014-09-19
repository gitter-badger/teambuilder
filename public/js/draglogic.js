 $(document).ready(function() {

    var grabbedObj = null,
        grabbedObjDefaultTop,
        grabbedObjDefaultLeft;


    $(document.body).on("mousemove", function(e) {
        if (grabbedObj) {
            grabbedObj.offset({
                top: e.pageY,
                left: e.pageX
            });
        }
    });
    
    $(document.body).on("mousedown", function (e) {
    	    e.preventDefault();
    	if ($(e.target).hasClass('member-class'))	{
        	grabbedObj = $(e.target);
            grabbedObjDefaultTop = grabbedObj.offset().top;
            grabbedObjDefaultleft= grabbedObj.offset().left;
            grabbedObj.addClass('moving');
        }
    });
    
    $(document.body).on("mouseup", function (e) {

        var grabbedObjteam = grabbedObj.parents('.team-container').attr('id');

    	var fBorderTop, fBorderLeft, fBorderRight,fBorderBottom,
    	    bBorderTop, bBorderLeft, bBorderRight,bBorderBottom,
    	    objTop, objLeft;


    	fBorderTop = $('#frontend').offset().top;
    	fBorderLeft = $('#frontend').offset().left;
    	fBorderRight = fBorderLeft + 480;
    	fBorderBottom = fBorderTop + $('#frontend').height();;

    	bBorderTop = $('#backend').offset().top;
    	bBorderLeft = $('#backend').offset().left;
    	bBorderRight = bBorderLeft + 480;
    	bBorderBottom = bBorderTop + $('#backend').height();;

    	objTop = grabbedObj.offset().top;
    	objLeft = grabbedObj.offset().left;

    	
    	if (objLeft > fBorderLeft && objLeft < fBorderRight) {
    		if (objTop > fBorderTop && objTop < fBorderBottom) {
                if (grabbedObjteam == 'frontend') {
                    grabbedObj.offset({
                        top: grabbedObjDefaultTop,
                        left: grabbedObjDefaultLeft
                    },300);
                }   
    			alert('His place is in front-end team');
    		}
    	} 

		if (objLeft > bBorderLeft && objLeft < bBorderRight) {
    		if (objTop > bBorderTop && objTop < bBorderBottom) {
    			alert('His place is in back-end team');
    		}
    	} 

        grabbedObj.removeClass('moving');

        grabbedObj = null;
    });

 });