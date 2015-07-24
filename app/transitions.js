export default function () {
  this.transition(
    this.debug(),
    this.hasClass('test'),
    this.onInitialRender(),
    //this.includingInitialRender(),
    //this.fromRoute(null),
    this.use('crossFade')
  );
}
