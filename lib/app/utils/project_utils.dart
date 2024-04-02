class ProjectUtils {
  final String banners;
  final String icons;
  final String titles;
  final String description;
  final String links;
  ProjectUtils({
    required this.banners,
    required this.icons,
    required this.titles,
    required this.description,
    required this.links,
  });
}

List<ProjectUtils> projectUtils = [
  ProjectUtils(
    banners: 'assets/imgs/02.png',
    icons: 'assets/imgs/flutter.png',
    titles: 'JU Bus Route Tracer',
    description:
        'This is Fully functional Jahangirnagar University Bus Route Tracer App by using flutter, source code is also available, check below.',
    links: 'https://github.com/asifjahan1/JU-Bus-Route-Tracer',
  ),
  ProjectUtils(
    banners: 'assets/imgs/1.png',
    icons: 'assets/imgs/flutter.png',
    titles: 'Flutter News Reader',
    description:
        'This is a News Reader App Design using Flutter, file is also available, check below.',
    links: 'https://github.com/asifjahan1/Flutter-News-Reader',
  ),
  ProjectUtils(
    banners: 'assets/imgs/03.png',
    icons: 'assets/imgs/flutter.png',
    titles: 'Custom Bottom Navigation Bar',
    description:
        'This is a just Fully function Custom Bottom Navigation Bar by using flutter, source code is also available, check below.',
    links: 'https://github.com/asifjahan1/custom_bottom_navbar',
  ),
  ProjectUtils(
    banners: 'assets/imgs/04.png',
    icons: 'assets/imgs/flutter.png',
    titles: 'Weather Application',
    description:
        'This is Weather App by using flutter, source code is also available, check below.',
    links: 'https://github.com/asifjahan1/Weather-App',
  ),
];
