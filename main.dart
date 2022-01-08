import 'dart:ui';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:portfolio/contactpage.dart';
// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;

import 'package:portfolio/faqscreen.dart';
import 'package:portfolio/products.dart';

void main() {
  runApp(MaterialApp(
    onUnknownRoute: (settings) {
      return MaterialPageRoute(builder: (_) => MyApp());
    },
    home: MyApp(),
    routes: {
      '/home':(context)=>MyApp(),
      '/contact':(context)=>ContactPage(),
      '/faq':(context)=>FaqScreen(),
      '/products':(context)=>Products()
    },
  ));
}

// ignore: use_key_in_widget_constructors
class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {

  bool hovering1 = false;
  bool hovering2 = false;
  bool hovering3 = false;
  double scrolled = 0;
  PageController controller =PageController(initialPage: 0);

  @override
  void initState() {
    super.initState();
    html.window.history.pushState(null, "Home", "/");
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    return Scaffold(
      body: Container(
        color: Colors.white,
        child: Stack(
          children: [
            Container(
              alignment: Alignment.topCenter,
              height: size.height,
              width: size.width,
              decoration: BoxDecoration(
                  image: DecorationImage(
                      colorFilter: ColorFilter.mode(Colors.cyan.withOpacity(0.8), BlendMode.srcATop),
                      image: const AssetImage('assets/images/background.jpg'),
                      fit: BoxFit.fitWidth
                  )
              ),
            ),
            Column(
              children: [
                SizedBox(height: size.height*0.03,),
                //appbar
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    MouseRegion(
                      cursor: SystemMouseCursors.click,
                      onEnter: (value){
                        setState(() {
                          hovering1 = true;
                        });
                      },
                      onExit: (value){
                        setState(() {
                          hovering1 = false;
                        });
                      },
                      child: GestureDetector(
                        onTap: ()=>Navigator.of(context).pushNamed('/products'),
                        child: Container(
                          alignment: Alignment.center,
                          height: 40,
                          padding: const EdgeInsets.only(left: 20, right: 20),
                          decoration: BoxDecoration(
                              color: hovering1?Colors.white10:Colors.transparent,
                              borderRadius: BorderRadius.circular(20)
                          ),
                          child: const Text('Products', style: TextStyle(fontFamily: 'BalooDa', color: Colors.white, fontWeight: FontWeight.w600, fontSize: 20),),
                        ),
                      )
                    ), //products
                    MouseRegion(
                      cursor: SystemMouseCursors.click,
                      onEnter: (value){
                        setState(() {
                          hovering2 = true;
                        });
                      },
                      onExit: (value){
                        setState(() {
                          hovering2 = false;
                        });
                      },
                      child: GestureDetector(
                        onTap: (){
                          Navigator.of(context).pushNamed('/contact');
                        },
                        child: Container(
                          alignment: Alignment.center,
                          height: 40,
                          padding: const EdgeInsets.only(left: 20, right: 20),
                          decoration: BoxDecoration(
                              color: hovering2?Colors.white10:Colors.transparent,
                              borderRadius: BorderRadius.circular(20)
                          ),
                          child: const Text('Contact', style: TextStyle(fontFamily: 'BalooDa', color: Colors.white, fontWeight: FontWeight.w600, fontSize: 20),),
                        ),
                      ),
                    ), //contact us
                    MouseRegion(
                      cursor: SystemMouseCursors.click,
                      onEnter: (value){
                        setState(() {
                          hovering3 = true;
                        });
                      },
                      onExit: (value){
                        setState(() {
                          hovering3 = false;
                        });
                      },
                      child: GestureDetector(
                        onTap: ()=>Navigator.of(context).pushNamed('/faq'),
                        child: Container(
                          alignment: Alignment.center,
                          height: 40,
                          padding: const EdgeInsets.only(left: 20, right: 20),
                          decoration: BoxDecoration(
                              color: hovering3?Colors.white10:Colors.transparent,
                              borderRadius: BorderRadius.circular(20)
                          ),
                          child: const Text('FAQ', style: TextStyle(fontFamily: 'BalooDa', color: Colors.white, fontWeight: FontWeight.w600, fontSize: 20),),
                        ),
                      )
                    ), //faq
                  ],
                ),
                // ignore: sized_box_for_whitespace
                Container(
                    alignment: Alignment.topCenter,
                    height: size.height*0.9,
                    width: size.width,
                    child: Column(
                      children: [
                        SizedBox(height: size.height*0.15,),
                        Image.asset('assets/images/logo.png', height: 220,),
                        SizedBox(height: size.height*0.07,),
                        Text('WinterSol', style: GoogleFonts.chelaOne(textStyle: const TextStyle(fontSize: 75, color: Colors.white, fontWeight: FontWeight.w900, letterSpacing: 5)),),
                        Text('Expelling Hassle. Rendering Comfort.', style: GoogleFonts.berkshireSwash(textStyle: const TextStyle(fontFamily: 'BalooDa', fontSize: 25, color: Colors.white, fontWeight: FontWeight.w900)),),
                        SizedBox(height: size.height*0.08,),
                        Image.network('https://cdn-img-hw.ludashi.com/web/dualspace/PC/static/images/v2/googleplay.png', height: 50,),
                      ],
                    )
                ),
              ],
            ),
          ],
        )
      ),
    );
  }
}
