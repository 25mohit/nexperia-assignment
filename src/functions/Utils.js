import jsPDF from "jspdf";

export const GeneratePDF = (summury) => {
    
    const doc = new jsPDF();

    const imgData = `${process.env.PUBLIC_URL}/Assets/logo.png`;
    doc.addImage(imgData, 'PNG', 70, 10, 50, 17);

    // Set Font Size
    doc.setFontSize(18);

    // Set Text Color
    const rupeeSymbol = 'INR';

    doc.text("Loan Amount:", 10, 45);
    doc.text(`${rupeeSymbol} ${summury?.d?.amount}`, 60, 45);
    doc.text("Tenure:", 10, 55);
    doc.text(`${summury?.d?.tenure} months`, 60, 55);
    doc.text("Interest Rate:", 10, 65);
    doc.text(`${summury?.d?.interest}%`, 60, 65);
    doc.text("Interest:", 10, 75);
    doc.text(`${rupeeSymbol} ${summury?.s?.interestPerMonth.toFixed(2)} pm`, 60, 75);
    doc.text("EMI:", 10, 85);
    doc.text(`${rupeeSymbol} ${summury?.s?.emi.toFixed(2)} pm`, 60, 85);
    doc.text("Total Interest:", 10, 95);
    doc.text(`${rupeeSymbol} ${summury?.s?.totalInterest.toFixed(2)}`, 60, 95);
    doc.text("Total Amount:", 10, 105);
    doc.text(`${rupeeSymbol} ${summury?.s?.totalPayment.toFixed(2)}`, 60, 105);
    // Save the PDF
    doc.save("loan_details.pdf");
}

export const calculateLoanFromAPU = (setLoadingStatus) => {
    setTimeout(() => {
        setLoadingStatus(false)
    },1500)
}