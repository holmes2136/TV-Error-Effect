
$(document).ready(function() {
   
    function Tv(el, max, step) {
        this.speed = 0; 
        this.step = step; 
        this.el = el; 
        this.maxSpeed = max; 
      
        $(el).pan({
            fps:200,
            dir:'down'
        });
        $(el).spStop();
    }

    /**
    * Starts effect
    */
    Tv.prototype.start = function() {
        var _this = this;
        $(_this.el).addClass('motion');
        $(_this.el).spStart();
        _this.si = window.setInterval(function() {
            if(_this.speed < _this.maxSpeed) {
                _this.speed += _this.step;
                $(_this.el).spSpeed(_this.speed);
            }
        }, 100);
    };

    var a = new Tv('#tv', 200, 200);

    a.start();
    
    
});
