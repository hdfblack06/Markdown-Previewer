    //Get icon id for editor and previewer
    const editorDiv = document.getElementById("editorDiv");
    const previewerDiv = document.getElementById("previewer");
    const resize_editor = document.getElementById("resize_editor");
    const resize_previewer = document.getElementById("resize_previewer");
    const containerDiv = document.getElementById("container");

    const texteditor = document.getElementById("editor");
    const previewer = document.getElementById("preview");
    const defaultData = `# welcome everyone\n## testing if this marked working or not\n\nThere's also **[MY GITHUB](https://github.com/hdfblack06)**, and a quote\n> LIFE IS **_GOOD_**,\n\`\`\`\n function LifeStatus() {\n\nconsole.log("it's what it's");\n}\n\`\`\`\n\nA code block why not, \`<p> this is going wild </p>\`.\n\n- TESTING LISTS.\n- ONE TWO ONE TWO.\n- ALL GOOD HERE.\n1. ORDER LISTS\n1. YEAH ALL GOOD TOO\n1. WE READY TO GO..\n\n![cat meme](https://media.tenor.com/gSl1GTJY-NcAAAAC/rhobh-cat.gif)`;

    //CHECK IF EXPAND OR NOT 
    var editor_checker = false;
    var previewer_checker = false;
    // Add a click event listener to the icons
    resize_editor.addEventListener("click", function() {
        if(editor_checker==false){
            editor_checker = true;
        }else{editor_checker=false;}
        Resize(1);
    });
    resize_previewer.addEventListener("click", function() {
        if(previewer_checker== false){
            previewer_checker = true;
        }else{previewer_checker=false;}
        Resize(2);
    });
    //func to handle resizing div show and hide them right way
    function Resize(icon)
    {
        let iconsClasses =["fa fa-solid fa-expand fa-lg sizing","fa fa-solid fa-minimize fa-lg sizing"];
        let divClasses_Main= ["editor_container","previewer_container"];
        let divClasses_expand =["container_hided","editor_container_expanded","previewer_container_expanded"];
        if(icon == 1){
            if(editor_checker === false){
                resize_editor.className = iconsClasses[0];
                //set the default class to the editor and previewer divs
                editorDiv.className =divClasses_Main[0];
                previewerDiv.className =divClasses_Main[1];

                containerDiv.style.height ="";
    
            }else{resize_editor.className = iconsClasses[1];
                //change the class of div hide previewer and expand editor
                editorDiv.className = divClasses_expand[1];
                previewerDiv.className =divClasses_expand[0];

                containerDiv.style.height ="100%";
            }
        }
        else if (icon == 2){
            if(previewer_checker === false ){
                resize_previewer.className = iconsClasses[0];
                //set the default class to the editor and previewer divs
                editorDiv.className =divClasses_Main[0];
                previewerDiv.className =divClasses_Main[1];
                
            }else{resize_previewer.className = iconsClasses[1];
                //change the class of div hide editor and expand previewer
                editorDiv.className = divClasses_expand[0];
                previewerDiv.className =divClasses_expand[2];
            }
        }  
    }
    // add onChange even to change text to html 
    texteditor.addEventListener("input",function (){
        previewer.innerHTML =
        marked.parse(texteditor.value);
    });  
    function DefaultInput(){

        // Create a new input event
        const inputEvent = new Event("input", {
            bubbles: true,
            cancelable: true,
        });
        texteditor.value =defaultData;
        // Dispatch the input event
        texteditor.dispatchEvent(inputEvent);
        
    }
    // Call the function when the page loads
    window.onload = DefaultInput();



   