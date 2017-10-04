module objects.physics {

    export class forwardMovingProjectile extends objects.physics.Projectile {



        /*
        @description image, speed, starting position, starting rotation,  
        */
       public projectileTimer() {
            //after 3 seconds the bullet should go back to purgatory
            
        }

        public projectileAction(speed: number, affectedObject:objects.GameObject): void {
            this.straightFlying(speed, affectedObject);
        }

        //makes the projectile move forward
        public straightFlying(speed: number, affectedObject:objects.GameObject): void {
            let retVect2 = Vector2.forward(affectedObject.rotation);
            affectedObject.x += retVect2.x * speed;
            affectedObject.y += retVect2.y * speed;
        }

        
    }
}