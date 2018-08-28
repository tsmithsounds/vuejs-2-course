new Vue({
  el: '#app',
  data: {
    gameIsPlaying: false,
    myHealth: 100,
    monsterHealth: 100,
    fightLog: []
  },
  methods: {
    randomDamage: function(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    checkScore: function() {
      if (this.myHealth <= 0 | this.monsterHealth <= 0) {
        if (this.myHealth < this.monsterHealth) {
          var winner = 'Monster';
        } else {
          winner = 'Player';
        }
        alert('Game over! '+winner+' wins.');
        this.myHealth = 100;
        this.monsterHealth = 100;
        this.gameIsPlaying = false;
        this.fightLog = [];
      };
    },
    monsterAttack: function() {
      var damage = this.randomDamage(1, 7);
      this.myHealth -= damage;
      this.fightLog.unshift({
        isPlayer: false,
        text: 'Monster hit the player for '+damage+' points.'
      });
    },
    startGame: function() {
      this.gameIsPlaying = !this.gameIsPlaying;
    },
    attack: function() {
      var damage = this.randomDamage(1, 5);
      this.monsterHealth -= damage;
      this.fightLog.unshift({
        isPlayer: true,
        text: 'Player hit the monster for '+damage+' points.'
      });
      this.monsterAttack();
      this.checkScore();
    },
    specialAttack: function() {
      var damage = this.randomDamage(4, 8);
      this.monsterHealth -= damage;
      this.fightLog.unshift({
        isPlayer: true,
        text: 'Player hit the monster for '+damage+' points.'
      });
      this.monsterAttack();
      this.checkScore();
    },
    heal: function() {
      this.myHealth += this.randomDamage(5,10);
      if (this.myHealth >= 100) {
        this.myHealth = 100;
      };
      this.monsterAttack();
      this.checkScore();
    },
    giveUp: function() {
      if (confirm('Ready to give up?')) {
        this.myHealth = 100;
        this.monsterHealth = 100;
        this.gameIsPlaying = false;
        this.fightLog = [];
      };

    }
  }

});
