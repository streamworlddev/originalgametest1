class Player {
  constructor({x, y, radius, color, username}) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color
    this.username = username
  }

  draw(me) {

    c.font = '12px sans-serif'
    
    if (me) c.fillStyle = 'red'
    else c.fillStyle = 'white'
    c.fillText(this.username,this.x - 25,this.y - 15)
    c.save()
    c.shadowColor = this.color
    c.shadowBlur = 20
    c.beginPath()
    c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false)
    c.fillStyle = this.color
    c.fill()
    c.restore()
  }
}
