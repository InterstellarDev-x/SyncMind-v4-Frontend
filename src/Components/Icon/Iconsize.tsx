
type Sizetype = "sm" |"md" |"lg"
 
export interface iconsize {
    size? : Sizetype 
    sidebar? : boolean 
}



export const iconsSizeStyle : Record<Sizetype  , string> = {
  "sm" : "size-5",
  "md" : "size-6",
  "lg" : "size-8"
}