/*
 * Determine the original side lengths and return an array:
 * - The first element is the length of the shorter side
 * - The second element is the length of the longer side
 * 
 * Parameter(s):
 * literals: The tagged template literal's array of strings.
 * expressions: The tagged template literal's array of expression values (i.e., [area, perimeter]).
 */
function sides(literals, ...expressions) {
        let result;
    let s=Math.sqrt(Math.pow(expressions[1],2) -16*expressions[0])
    let s1=(expressions[1] + s) /4;
    let s2=(expressions[1] - s) /4;
    result=[s1,s2];
    return result.sort();
}
