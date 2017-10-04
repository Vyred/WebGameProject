module objects {
    export class ButtonWithText extends createjs.Text {
        //PRIVATE INSTANCE VARIABLES
        width: number;
        height: number;
        //CONSTRUCTOR
        constructor(
            x:number, 
            y: number, 
            private labelString: string,
            private fontSize: string,
            private fontFamily: string,
            private fontColour: string,
            isCentered: boolean) {
                //"bold 86px Arial" Courier
                //labelString, (fontSize + " " + fontFamily), fontColour
            super(labelString, "bold " + fontSize + " Courier", fontColour);
                

            this.x = x;
            this.y = y; 

            this.width = 150;
            this.height = 50;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.on("mouseover", this.overButton, this);
            this.on("mouseout", this.outButton, this);

            if (isCentered) {
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredHeight() * 0.5;
            }
        }

        // PRIVATE METHODS
        // Event Handler for mouse over
        overButton(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 0.6;
        }

        // Event Handler for mouse out
        outButton(event: createjs.MouseEvent): void {
            event.currentTarget.alpha = 1.0;
        }


    }
} 