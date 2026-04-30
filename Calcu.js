let msgpara = document.querySelector(".msg-box p");
// let numbtns= document.querySelector(".numeric-main-box");
let numbers = document.querySelectorAll(".integer-box span");
let refreshbtns = document.querySelectorAll(".refresh-box span");
let calbtns = document.querySelectorAll(".calcul-box span");

let currmsg = "";
let firstval = "";
let operator = "";
let secondval = "";

msgpara.style.fontSize = "40px";

                        // Display Message on the message box 

    function displaymsg()
    {
        for(let num of numbers)
            {
                num.addEventListener("click", () =>
                   
                {
                    // alert("Hello btn");
                    currmsg += num.innerText;
                    msgpara.innerText = currmsg;
                });
            }
    }


    function handleClear()
    {

        for(let btn of refreshbtns)
            {
                btn.addEventListener("click" ,() =>
                {
                    if(btn.innerText === "C" || btn.innerText === "CE")
                    {
                        
                            // button click hony per sara data delte ho aor msgbox 0 se shuro ho 
        
                            currmsg = "";
                            msgpara.innerText = "0";
                    }
        
                            // button click hony per akhri msg remove ho 
        
                    else if(btn.innerText === "x")
                    {
                        currmsg =currmsg.slice(0,-1);
                        msgpara.innerText = currmsg;
        
                        //  if curent value equal to zero then it set to 0
        
                        if(currmsg === "")
                            {
                                currmsg = "";
                            }
        
                        msgpara.innerText = currmsg;
                    }
        
                    else if(btn.innerText === "%")
                    {
                        currmsg = (parseFloat(currmsg/100).toString());
                        msgpara.innerText = currmsg;
                    }
                });
            }

    }
 
    
    function HandleOperations()
    {
        for(let calbtn of calbtns)
        {
            calbtn.addEventListener("click", ()=>
            {

                // Add two numbers

                if(calbtn.innerText === "+")
                {
                    // alert("Hello");
                    firstval = currmsg;
                    operator = "+"
                    currmsg = "";
                    msgpara.innerText = "0";
                }
                if(calbtn.innerText === "=")
                {
                        if(operator === "+")
                        {
                            secondval = currmsg;
                            currmsg = (parseFloat(firstval) + (parseFloat(secondval))).toString();
                        }
                        msgpara.innerText = currmsg;
                }

                //  subtract two numbers
                
                if(calbtn.innerText === "-")
                    {
                        // alert("Hello");
                        firstval = currmsg;
                        operator = "-"
                        currmsg = "";
                        msgpara.innerText = "0";
                    }
                    if(calbtn.innerText === "=")
                    {
                            if(operator === "-")
                            {
                                secondval = currmsg;
                                currmsg = (parseFloat(firstval) - (parseFloat(secondval))).toString();
                            }
                            msgpara.innerText = currmsg;
                    }

                    // Multiply Two numbers

                    if(calbtn.innerText === "x")
                        {
                            // alert("Hello");
                            firstval = currmsg;
                            operator = "x"
                            currmsg = "";
                            msgpara.innerText = "0";
                        }
                        if(calbtn.innerText === "=")
                        {
                                if(operator === "x")
                                {
                                    secondval = currmsg;
                                    currmsg = (parseFloat(firstval) * (parseFloat(secondval))).toString();
                                }
                                msgpara.innerText = currmsg;
                        }

                        //Divide two numbers

                        if(calbtn.innerText === "/")
                            {
                                // alert("Hello");
                                firstval = currmsg;
                                operator = "/"
                                currmsg = "";
                                msgpara.innerText = "0";
                            }
                            if(calbtn.innerText === "=")
                            {
                                    if(operator === "/")
                                    {
                                        secondval = currmsg;
                                        currmsg = (parseFloat(firstval) / (parseFloat(secondval))).toString();
                                    }
                                    msgpara.innerText = currmsg;
                            }

                            if(calbtn.innerText === ".")
                            {
                                currmsg+=calbtn.innerText;
                                msgpara.innerText = currmsg;
                            }

            });
        }
    }

                        // Functions Call ho raha hai

displaymsg();
handleClear();
HandleOperations();