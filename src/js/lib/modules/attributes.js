import $ from '../core';

$.prototype.addAttribute = function (attributeName,value) {
   for (let i = 0; i < this.length; i++) {
      this[i].setAttribute(attributeName,value);
   }

   return this;
};

$.prototype.removeAttribute = function (attributeName) {
   for (let i = 0; i < this.length; i++) {
      this[i].removeAttribute(attributeName);
   }

   return this;
};

$.prototype.toggleAttribute = function (attributeName) {
   for (let i = 0; i < this.length; i++) {
      this[i].toggleAttribute(attributeName);
   }

   return this;
};