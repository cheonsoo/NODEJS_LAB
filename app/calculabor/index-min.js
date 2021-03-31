const math=require("mathjs"),PARSER=require("./parser"),UTILS=require("./utils"),lines="var1_var2 = 1\nvar3 = 3\nvar4 = 4\nvar5 = 5\nvar1_var2 + var5 - var4 / var3\nvar3 + var4\n비행기 = 100000\n숙박비 = 50000\n여행경비 = 비행기 + 숙박비\n비행기 + 숙박비",formulars=lines.split("\n"),parsed=PARSER.parse(formulars);Object.keys(parsed.equations).forEach(a=>{const r=PARSER.getEquation(parsed.variables,parsed.equations[a].name);parsed.equations[a].converted=r,parsed.equations[a].value=math.evaluate(r)}),UTILS.printResult(parsed);