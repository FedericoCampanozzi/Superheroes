export class UtilityFunction {
  public formatDate(dataStr: string): string {
    return UtilityFunction.formatDate(dataStr);
  }
  public static formatDate(dataStr: string): string {
    if(dataStr == undefined) return "";
    let date = new Date(dataStr);
    return date.toLocaleDateString();
  }
  public formatDate2(data: Date): string {
    return UtilityFunction.formatDate2(data);
  }
  public static formatDate2(data: Date): string {
    if(data == undefined) return "";
    return data.toLocaleDateString();
  }
}