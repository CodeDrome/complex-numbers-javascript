window.onload = function()
{
    complexnumbers();
}


function complexnumbers()
{
    writeToConsole("Complex Numbers with math.js<br />============================<br /><br />");

    writeToConsole("Addition<br />========<br /><br />");

    const z1 = math.complex(7, 12);
    const z2 = math.complex(14, 24);
    const z3 = math.add(z1, z2);
    writeToConsole(`(${z1}) + (${z2}) = (${z3})<br /><br />`);

    writeToConsole("Subtraction<br />===========<br /><br />");

    const z4 = math.complex(10, 6);
    const z5 = math.complex(4, 2);
    const z6 = math.subtract(z4, z5);
    writeToConsole(`(${z4}) - (${z5}) = (${z6})<br /><br />`);

    writeToConsole("Multiplication<br />==============<br /><br />");

    const z7 = math.complex(3, 2);
    const z8 = math.complex(4, 5);
    const z9 = math.multiply(z7, z8);
    writeToConsole(`(${z7}) * (${z8}) = (${z9})<br /><br />`);

    writeToConsole("Division<br />========<br /><br />");

    const z10 = math.complex(4, 7);
    const z11 = math.complex(1, -3);
    const z12 = math.divide(z10, z11);
    writeToConsole(`(${z10}) / (${z11}) = (${z12})<br /><br />`);

    writeToConsole("Complex Conjugate<br />=================<br /><br />");

    const z13 = math.complex(3, 4);
    const z14 = z13.conjugate();
    writeToConsole(`complex conjugate of (${z13}) = (${z14})<br /><br />`);

    writeToConsole("Modulus and Argument<br />====================<br /><br />");

    const z15 = math.complex(3, 4);
    const polar = z15.toPolar();
    writeToConsole(`Modulus r of (${z15}) = ${polar.r}<br />`);
    writeToConsole(`Argument &phi; of (${z15}) = ${polar.phi} rad`);
}
