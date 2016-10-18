(function() {

    /**
     * Usage:
     *   <a class="md-hamburger-btn" ... >
     *       <span class="md-hamburger-icon">
     *           <span></span>
     *       </span>
     *   </a>
     */

    'use strict';

    document.querySelector('.md-hamburger-btn')
    .addEventListener('click', function() {      
        var iconClassList = this.querySelector('.md-hamburger-icon').classList;

        if (iconClassList.contains('open')) {
            iconClassList.remove('open');
            iconClassList.add('closed');
        } else {
            iconClassList.remove('closed');
            iconClassList.add('open');
        }
    });
})();
