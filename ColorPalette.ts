/**
 * @author Nejdet DALASLAN
 * @email nejdetdalaslan@gmail.com
 * This class was created to easily use dark and light color palettes.
 * */
import themes, { Theme } from "./colors";

export class ColorPalette {

  private _theme!: Theme;

  constructor(AppTheme: boolean) {
    this.changeColorSet(AppTheme);
  }
  public changeColorSet (AppTheme: boolean): Theme{
    this._theme = AppTheme ? themes.dark : themes.light;
    return this._theme;
  }
  get theme(): Theme {
    return this._theme;
  }

  set theme(value: Theme) {
    this._theme = value;
  }
}
