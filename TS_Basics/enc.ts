var print : any = (what: string) => console.log(what);

var reverse = (what : string) => what.split("").reverse().join("");

var barista = {
  str1 : 'ion',
  str2 : reverse('rcne'),
  str3 : 'ypt',
  request: function(preference : string) {
    return preference + ' secret word: ' + this.str2 + this.str3 + this.str1;
  }
}

print(barista.request('coffee'));
