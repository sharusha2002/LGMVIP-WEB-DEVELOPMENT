const data = [
    {
        name: "Karthick",
        Register_number :"111519205009",
        Discrete_Mathematics:"A+",
        Data_Structures: "A",
        OOPS: "B",
        Digital_Principles:"O",
       GPA: "8.3"
    },  
    {
        name: "Sowmya",
        Register_number :"111519205010",
        Discrete_Mathematics:"A+",
        Data_Structures: "A",
        OOPS: "0",
        Digital_Principles:"A+",
        GPA:"8.9"
        
    },
    {
        name: "Sakthi",
        Register_number :"111519205020",
        Discrete_Mathematics:"A+",
        Data_Structures: "A",
        OOPS: "A+",
        Digital_Principles:"O",
        GPA:"9.3"
        
    },
    {
        name: "Sujitha",
        Register_number :"111519205050",
        Discrete_Mathematics:"O",
        Data_Structures: "A",
        OOPS: "B",
        Digital_Principles:"A",
        GPA:"7.5"
    },
    {
        name: "Sarath",
        Register_number :"111519205030",
        Discrete_Mathematics:"A+",
        Data_Structures: "A",
        OOPS: "O",
        Digital_Principles:"O",
        GPA:"8.9"
        
    }
]

const results = document.getElementById('res')

const smBtn = document.getElementById('smt-btn')
smBtn.addEventListener("click", function() {
    const name = document.getElementById('name-box').value;
    for(let i = 0; i < data.length; i++){
        if(data[i].name.toLowerCase() == name.toLowerCase()){
            console.log(data[i].marks)
            results.innerHTML ="<h3>" + "Discrete_Mathematics : " + data[i].Discrete_Mathematics +"</h3>" + "<h3>" + " Data Structures: " 
            + data[i].Data_Structures +"</h3>" +"<h3>" + "OOPS: " + data[i].OOPS +"</h3>"+"<h3>" + "Digital_Principles: " + data[i].Digital_Principles + "</h3>"
            " GPA: " +data[i].GPA + "</h3>"
            return;
        }
    }
    results.innerHTML = "<h3>" + "Information is unavailable!!!" + "</h3>" 

}) 

