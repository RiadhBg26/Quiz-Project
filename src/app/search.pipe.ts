import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(listOfAnswers: any, searchTerm: any): any {
    //check if searchTerm is undefined
    if (searchTerm === undefined || searchTerm === null || searchTerm === "") 
      return listOfAnswers
    // otherwise  return updated listOfAnswers array
      return listOfAnswers.filter(function (item){
        return item.question.toLowerCase().includes(searchTerm.toLowerCase())
    })

  }
}
