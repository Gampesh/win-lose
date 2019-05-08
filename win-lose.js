process.stdin.resume();
process.stdin.setEncoding('ascii');
var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;
process.stdin.on('data', function (data) {
    input_stdin += data;
});
process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    let noOfTestcases = input_stdin_array.shift();
    let i = 0;
    while (i < noOfTestcases) {
        input_stdin_array.shift();
        let strengths = input_stdin_array.shift().trim().split(' ').sort((a, b) => parseInt(a) - parseInt(b));
        let energies = input_stdin_array.shift().trim().split(' ').sort((a, b) => parseInt(a) - parseInt(b));
        let lose = strengths.some((strength, index) => parseInt(strength) > parseInt(energies[index]));

        output = lose ? 'LOSE' : 'WIN';
        noOfTestcases--;
        process.stdout.write(""+output+"\n");
    }
});
