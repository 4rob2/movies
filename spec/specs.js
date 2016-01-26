describe('Ticket', function() {
  it("will give a price for a General Admission", function() {
    var testTicket  = new Ticket(10);
    expect(testTicket.generalPrice).to.equal(10);
  });

  it("will give a discounted price for a Senior Admission", function() {
    var testTicket  = new Ticket(7.50);
    expect(testTicket.seniorPrice).to.equal(7.50);
  });
});
