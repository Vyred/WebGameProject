module managers {
    export class Collision {
        constructor() {

            this.start();
        }

        public start() {

        }

        public update() {

        }

        public check(player: objects.GameObject, other: objects.GameObject) {
            //check to see if object is colliding
            
            if (objects.Vector2.distance(player.position, other.position) < (player.halfHeight + other.halfHeight)) {
                if (!other.isColliding) {
                    other.isColliding = true;

                    
                }
            }
            else {
                other.isColliding = false;
            }
        }
    }
}