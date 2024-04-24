// Ateeb Ahmed - Class Assignment - Grading Assignment
function StudentGrade(percentage: number){ 
    if (percentage < 33) { console.log("failed")}
    
    else if (percentage >= 33 && percentage < 40){ console.log("Grade E")}
    
    else if (percentage >= 40 && percentage < 50){ console.log("Grade D")}
    
    else if (percentage >= 50 && percentage < 60){ console.log("Grade C")}
    
    else if (percentage >= 60 && percentage < 70){ console.log("Grade B")}
    
    else if (percentage >= 70 && percentage < 80){ console.log("Grade A")}
    
    else if (percentage >= 80){ console.log("Grade A-1")}
    }
    
    StudentGrade(68)