describe('Ticket', function() {
  it("will give a price for a General Admission", function() {
    var testTicket  = new Ticket(10);
    expect(testTicket.generalPrice).to.equal(10);
  });
});
