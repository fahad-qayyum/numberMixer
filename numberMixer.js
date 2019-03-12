#include <stdio.h>
#include <stdlib.h>
#include <string.h>
FILE *cfPtr1;
FILE *cfPtr2;
char whatIWrite;

int main (void) {
char *fileToRead = malloc(101); // declaring a pointer and assigning a size of 101 bytes
char *fileToWrite = malloc(101);
  
printf("Please enter the name of the file to be read: ");
scanf("%s",fileToRead);
  
//if file is read as empty retruns teh text File could not be opened
if ( (cfPtr1 = fopen(fileToRead, "r" )) == NULL) {
puts( "File could not be opened\n");
}
  
printf("Please enter the name of the file where you would like to write: \n");
scanf("%s", fileToWrite);
//if file is read as empty retruns teh text File could not be opened
if ( (cfPtr2 = fopen(fileToWrite, "w" )) == NULL) {
puts( "File could not be opened\n");
}
  
//Everything is well and we can copy the files.
else{
  
//Read from fileToRead
whatIWrite = fgetc(cfPtr1);
while (whatIWrite != EOF){
fputc(whatIWrite, cfPtr2);
whatIWrite = fgetc(cfPtr1);
}

printf("The file has been copied.");
  
//closes the file
fclose ( cfPtr1 );
fclose ( cfPtr2 );
}//End else
return 0;
  
} // end main