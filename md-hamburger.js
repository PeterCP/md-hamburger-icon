(function() {

    /**
     * Usage:
     *   <a|button class="md-hamburger" ... >
     *       <span></span>
     *   </a|button>
     */

    'use strict';

    document.querySelectorAll('.md-hamburger').forEach(function (btn) {
        btn.addEventListener('click', function() {      
            var iconClassList = this.classList;

            if (iconClassList.contains('open')) {
                iconClassList.remove('open');
                iconClassList.add('closed');
            } else {
                iconClassList.remove('closed');
                iconClassList.add('open');
            }
        });
    });
})();
