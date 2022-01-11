var print : any = (what) => console.log(what);

var reverse = (what) => what.split("").reverse().join("");

var barista = {
  str1 : 'ion',
  str2 : reverse('rcne'),
  str3 : 'ypt',
  request: function(preference) {
    return preference + ' secret word: ' + this.str2 + this.str3 + this.str1;
  }
}

print(barista.request('coffee'));
