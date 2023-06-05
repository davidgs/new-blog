# Typer:

array of strings[]
  step through array -- stringArrayIndex
    step through string -- stringIndex
      if Go forward && stringIndex < stringLength -1
         return stringIndex++
      else
         set go backward
         return stringIndex
      if go backward && stringIndex > 0
          return stringIndex--
      else
          set go forward
          set stringArrayIndex++
          return stringIndex
      if stringArrayIndex > stringArrayLength -1
          return stringArrayIndex--
      
