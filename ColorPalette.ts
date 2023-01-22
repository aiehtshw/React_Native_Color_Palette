/**
 * @author Nejdet DALASLAN
 * @email nejdetdalaslan@gmail.com
 * This class was created to easily use dark and light color palettes.
 * */
import themes, { Theme } from "./colors";

export class ColorPalette {

  private _theme!: Theme;

  /**
   * Create an object with a color palette
   * @param AppTheme is a boolean value. When dark mode is open AppTheme's value will be true
   * */
  constructor(AppTheme: boolean) {
    this.changeColorSet(AppTheme);
  }
  /**
   * @param AppTheme is a boolean value. When dark mode is open AppTheme's value will be true
   * Change theme light to dark or dark to light
   * */
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
