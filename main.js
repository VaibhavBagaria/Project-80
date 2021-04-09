var Paragraph_array = [];
function Get_P1() {
    var display_Paragraph_array = [];
    for (i = 1; i <= 6; i++) {
        var Para_Name = document.getElementById("Name_Of_Para_" + i).value;
        Paragraph_array.push(Para_Name)
    }
    console.log(Paragraph_array)

    var length_of_array = Paragraph_array.length;

    for (v = 0; v < length_of_array; v++) {
        display_Paragraph_array.join(". ")
        display_Paragraph_array.push(Paragraph_array[v])
        console.log(display_Paragraph_array)
    }
    document.getElementById("ShowParagraph").innerHTML=display_Paragraph_array.join(". ")
}



function Get_P2() {
    var display_Paragraph_array = [];
    for (i = 6; i <= 12; i++) {
        var Para_Name = document.getElementById("Name_Of_Para_" + i).value;
        Paragraph_array.push(Para_Name)
    }
    console.log(Paragraph_array)

    var length_of_array = Paragraph_array.length;

    for (v = 0; v < length_of_array; v++) {
        display_Paragraph_array.join(". ")
        display_Paragraph_array.push(Paragraph_array[v])
        console.log(display_Paragraph_array)
    }
    document.getElementById("ShowParagraph").innerHTML=display_Paragraph_array.join(". ")
}

