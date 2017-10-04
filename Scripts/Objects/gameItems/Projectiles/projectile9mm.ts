module objects.Items.projectiles {
    export class projectile9mm {
         //this class should basically just return a projectile when called
        private _projectile9mmAmmo : objects.Items.ItemAmmo;

        constructor() {
            this.projectile9mmAmmo = new objects.Items.ItemAmmo("bullet", "9mm", 9999, 10, "ammunition", 10, 10, new objects.physics.forwardMovingProjectile(), 1, "none", 0, 0, 35);
        }

        ////////////////////////////////////////////////////////////////////
        //
        get projectile9mmAmmo(): objects.Items.ItemAmmo {
            return this._projectile9mmAmmo;
        }
        set projectile9mmAmmo(newState: objects.Items.ItemAmmo) {
            this._projectile9mmAmmo = newState;
        }
    }
}