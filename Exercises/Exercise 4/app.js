new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true
    },
    colorInput: 'green',
    border: '',
    isFilled: false,
    inputWidth: 100,
    progressBar: {
      width: '0px',
      backgroundColor: 'green'
    }
  },
  methods: {
    startEffect: function() {
      vo = this;
      setInterval(function() {
        vo.effectClasses.highlight = !vo.effectClasses.highlight;
        vo.effectClasses.shrink = !vo.effectClasses.shrink;
      }, 1000);
    },
    startProgress: function() {
      vo = this;
      var width = 0;
      setInterval(function() {
        if (width <= 500) {
          width = width + 5;
          vo.progressBar.width = width+'px';
        }

      }, 100);
    }
  },
  computed: {
    myStyle: function() {
      return {
        color: 'blue',
        lineHeight: '3rem'
      }
    },
    width: function() {
      return {
        width: this.inputWidth + 'px'
      }
    }
  }
});
