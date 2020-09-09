const Constants = require('../shared/constants');

// Returns an array of bullets to be destroyed.
function applyCollisions(players, bullets) {
  const destroyedBullets = [];
  for (let i = 0; i < bullets.length; i++) {
    // Look for a player (who didn't create the bullet) to collide each bullet with.
    // As soon as we find one, break out of the loop to prevent double counting a bullet.
    for (let j = 0; j < players.length; j++) {
      const bullet = bullets[i];
      const player = players[j];

      // new shit below
      // use the player and bullet's collision boxes to determine if there was a collision
      if (bullet.parentID != player.id && player.box.checkCollision(bullet.box)) {
        destroyedBullets.push(bullet);
        player.takeBulletDamage();
        break;
      }

      // old shit below
      // if (
      //   bullet.parentID !== player.id &&
      //   isBulletCollidingWithShip(player, bullet)
      //   // player.distanceTo(bullet) <= Constants.PLAYER_RADIUS + Constants.BULLET_RADIUS
      // ) {
      //   destroyedBullets.push(bullet);
      //   player.takeBulletDamage();
      //   break;
      // }
    }
  }
  return destroyedBullets;
}

module.exports = applyCollisions;
