function quad_equation(discr) {
    var x1 = (-b+Math.sqrt(discr))/(2*a);
    var x2 = (-b-Math.sqrt(discr))/(2*a);
    var x3 = -b/(2*a);
    if (discr<0){
        return 'Equation has no real roots';
    } else {
        if (discr == 0) {
          document.write('x1=x2= ' + x3);
         } else {  
          document.write('x1= ' + x1);
          document.write('x2= ' + x2);
         }
    } 
}    

    
    var a = Number(prompt('For solving square equation a*x^2 + b*x + c = 0 input a'));
    var b = Number(prompt('For solving square equation a*x^2 + b*x + c = 0 input b'));
    var c = Number(prompt('For solving square equation a*x^2 + b*x + c = 0 input c'));
    var discr=b*b-4*a*c;
    
    var result = quad_equation(discr);
    document.writeln(result);
  