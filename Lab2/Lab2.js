function square(n)
{
  return n*n;
}

function howManyLightSabersDoYouOwn(name)
{
  var  lightsabers = 0;
if (name === "Zach")
{
lightsabers = 18;
}
return lightsabers;
}

function avgMarks(marks)
{
  var avg = 0;
  var count = 0;

  for (var i = 0; i < marks.length; i++)
  {
    count += 1;
    avg += results[i];
  }

  avg = avg / count;

  return avg;
}

function cannonsReady(gunners)
{
  var ready = 0;
  for (var name in gunners)
  {
  if (gunners.hasOwnProperty(name))
  	{
  		var quantity = gunners[name];
  		if(quantity === 'nay')
      {
        ready = 1;
      }
  	}
  }

  if(ready === 0)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function aliasGen(first, second)
{
  var firstName = {A: 'Alpha', B: 'Beta', C: 'cute', D: 'Dino'};
  var lastName = {A: 'Alpine', B: 'Bomb', C: 'cat', D: 'Dom'};

  var fakeFirst;
  var fakeLast;

  var fullName;

  if(first.charAt(0) === 'A')
  {
    fakeFirst = firstName['A'];
  }
  else if(first.charAt(0) === 'B')
  {
    fakeFirst = firstName['B'];
  }
  else if(first.charAt(0) === 'C')
  {
    fakeFirst = firstName['C'];
  }
  else if(first.charAt(0) === 'D')
  {
    fakeFirst = firstName['D'];
  }

  if(second.charAt(0) === 'A')
  {
    fakeLast = lastName['A'];
  }
  else if(second.charAt(0) === 'B')
  {
    fakeLast = lastName['B'];
  }
  else if(second.charAt(0) === 'C')
  {
    fakeLast = lastName['C'];
  }
  else if(second.charAt(0) === 'D')
  {
    fakeLast = lastName['D'];
  }

fullName = fakeFirst + ' ' + fakeLast;

return fullName;

}


function Ship(draft,crew)
{
 this.draft = draft;
 this.crew = crew;

 Ship.prototype.isWorthIt = function()
 {
   if(this.draft - (1.5 * this.crew) >= 20)
   {
     return true;
   }
   else {
     {
       return false;
     }
   }
 }

}

function main()
{
  //part 1
	if(square(5)==25)
	{
		console.log("OK");
	}
	else
	{
		console.log("square FAIL");
	}

//Part 2
  console.log("Zach has " + howManyLightSabersDoYouOwn("Zach") + " lightsabers");
  console.log("Dylan has " + howManyLightSabersDoYouOwn("Dylan") + " lightsabers");

//Part 3
results = [70, 80, 50, 40];

console.log("Average: " + avgMarks(results));

//Part 4
var a = {'Dylan' : 'aye', 'John' : 'aye', 'Pat' : 'aye'}
var b = {'Dylan' : 'nay', 'John' : 'aye', 'Pat' : 'aye'}

if(cannonsReady(a))
{
  console.log("Fire!");
}
else
{
  console.log("Shiver me timbers!");
}

if(cannonsReady(b))
{
  console.log("Fire!");
}
else
{
  console.log("Shiver me timbers!");
}


//Part 5
console.log(aliasGen('Ant', 'Boy'));
console.log(aliasGen('Bob', 'Connors'));

//Part 6
var titanic = new Ship(150,10);
var titanic2 = new Ship(15,10);

if(titanic.isWorthIt())
{
  console.log("Its worth it")
}
else
{
  console.log("Its not worth it")
}

if(titanic2.isWorthIt())
{
  console.log("Its worth it")
}
else
{
  console.log("Its not worth it")
}

//Part 7

}
