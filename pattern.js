
n = 5;

for (i = 1; i <= n; i++) {
    line = ' '
    for (j = 1; j <= n; j++) {
        line += ' *'
    }
    console.log(line)
}

for (i = 1; i <= n; i++) {
    line = ' '
    for (j = 1; j <= i; j++) {
        line += ' *'
    }
    console.log(line)
}

for (i = n; i >= 1; i--) {
    line = ' '
    for (j = 1; j <= i; j++) {
        line += ' *'
    }
    console.log(line)
}

for (i=1; i<=n; i++) {
    line = ''
    for (j=1; j<=n-i; j++) {
        line += ' '
    }
    for (k=1; k<=i; k++) {
        line += ' *'
    }
    console.log(line)
}

for (i=1; i<=n; i++) {
    line = ''
    for (j=1; j<=n-i; j++) {
        line += ' '
    }
    for (k=1; k<=i; k++) {
        line += ' *'
    }
 
   console.log(line)
}

for(i=n-1; i>=1; i--){
    line = ''
    for(j=1; j<=n-i; j++){
        line += ' '
    }
    for(k=1; k<=i; k++){
        line += ' *'
    }
    console.log(line)
}

for (i=1; i<n; i++) {
    line = ''
    for (j=1; j<=n-i; j++) {
        line += ' '
    }
    for (k=1; k<=i; k++) {
        line += i + ' '
    }
 
   console.log(line)
}

for(i=n; i>=1; i--){
    line = ''
    for(j=1; j<=n-i; j++){
        line += ' '
    }
    for(k=1; k<=i; k++){
        line += ' *'
    }
    console.log(line)
}

for (i=2; i<=n; i++) {
    line = ''
    for (j=1; j<=n-i; j++) {
        line += ' '
    }
    for (k=1; k<=i; k++) {
        line += ' *'
    }
 
   console.log(line)
}


        for( line = 0; line < n; i++){
             number = 1;
             row = "";
            for(i = 0; i <= line; i++){
                row += number + " ";
                number = number * (line-i)/(i+1);            
            }
                console.log(row);
        } 
        
