# React Native Color Palette
This class was created to easily use dark and light color palettes.

Example Usage:
 ```
  const [theme,setTheme] = useState(COLORS.theme)
  const scheme = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: theme.background
  };
  useEffect(() =>{
    console.log(scheme)
    setTheme(COLORS.changeColorSet(scheme))
    console.log(COLORS.theme)
  },[scheme])
  return <View style={{height:300,backgroundColor: **theme.background** }}>
```
When theme is changed scheme will change. So Effect will run and update the state. 

You can change colors in colors.ts folder. 
