module objects {
    
       export class forwardMovingProjectile extends objects.Projectile {
       
        constructor(imageString: string, startingRotation:number, startingPosition:Vector2) {
            super(imageString, startingRotation, startingPosition);

            this.start();
        }
            //makes the projectile move forward
            public straightFlying(speed: number):void{
            let retVect2 = Vector2.forward(this.rotation);
            this.x += retVect2.x * speed;
            this.y += retVect2.y * speed;
          }
       }
    }