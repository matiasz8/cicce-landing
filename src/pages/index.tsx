import { ArrowRight, BookOpen, Users, Award, CheckCircle, Star, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-bold text-gray-900">CICCE</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-600 hover:text-blue-600 transition-colors">
              Inicio
            </a>
            <a href="#programas" className="text-gray-600 hover:text-blue-600 transition-colors">
              Programas
            </a>
            <a href="#nosotros" className="text-gray-600 hover:text-blue-600 transition-colors">
              Nosotros
            </a>
            <a href="#testimonios" className="text-gray-600 hover:text-blue-600 transition-colors">
              Testimonios
            </a>
            <a href="#contacto" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contacto
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <a href="#inicio">Iniciar Sesión</a>
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <a href="#inscripcion">Inscribirse</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Educación en Salud de Excelencia</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Capacitamos profesionales de la{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600">
                    salud del futuro
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  CICCE es tu centro de referencia para la capacitación continua
                  en ciencias de la salud vinculadas al cuidado de las personas.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#programas">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Explorar Programas
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="#contacto">
                  <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100">
                    Solicitar Información
                  </Button>
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  {/* <div className="text-2xl font-bold text-gray-900">500+</div> */}
                  <div className="text-sm text-gray-600">Profesionales Certificados</div>
                </div>
                <div className="text-center">
                  {/* <div className="text-2xl font-bold text-gray-900">15+</div> */}
                  <div className="text-sm text-gray-600">Años de Experiencia</div>
                </div>
                <div className="text-center">
                  {/* <div className="text-2xl font-bold text-gray-900">98%</div> */}
                  {/* <div className="text-sm text-gray-600">Satisfacción</div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programas" className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Nuestros Programas</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Programas de Educación Continua</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre nuestros programas especializados diseñados para impulsar tu carrera profesional en el sector
              salud
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <BookOpen className="h-6 w-6 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Capacitación en Diagnósticos</CardTitle>
                <CardDescription>
                  Programa integral de actualización en diagnóstico y tratamiento de patologías complejas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Duración: 6 meses
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Modalidad: Híbrida
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Certificación Nacional
                  </div>
                </div>
                <Button className="w-full" variant="outline" disabled>
                  Próximamente
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <Users className="h-6 w-6 text-green-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Enfermería Laboral</CardTitle>
                <CardDescription>
                  Especialización en administración y gestión de instituciones de salud modernas
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Duración: 120 horas
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Modalidad: Virtual con seminarios presenciales
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Prácticas Incluidas
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Certificación al finalizar
                  </div>
                  <br />
                </div>
                <Link href="/#enfermeria-laboral">
                  <Button className="w-full" variant="outline">
                    Más Información
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="space-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-600 transition-colors">
                  <Award className="h-6 w-6 text-purple-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Investigación Clínica</CardTitle>
                <CardDescription>
                  Metodología de investigación aplicada a estudios clínicos y epidemiológicos
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Duración: 4 meses
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Modalidad: Presencial
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Proyecto Final
                  </div>
                </div>
                <Button className="w-full" variant="outline" disabled>
                  Próximamente
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100">Sobre CICCE</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Nuestro Equipo</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Con más de 15 años de experiencia, CICCE se ha consolidado como el centro de referencia para la
                  formación de profesionales de la salud en América Latina. Nuestro compromiso con la excelencia
                  académica y la innovación educativa nos distingue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curso: Enfermería Laboral */}
      <section id="enfermeria-laboral" className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Cursos</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Enfermería Laboral</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Formación especializada para desempeñarte en el ámbito de la salud ocupacional.
                  Adquirí herramientas clave en prevención, normativa legal y
                  asistencia integral en entornos laborales.
                </p>

                <ul className="text-base text-gray-700 space-y-2">
                  <li>📘 <strong>Duración:</strong> 120 horas</li>
                  <li>🌐 <strong>Modalidad:</strong> Virtual con seminarios presenciales</li>
                  <li>🎯 <strong>Objetivos:</strong></li>
                  <ul className="ml-6 list-disc space-y-1">
                    <li>Comprender el rol profesional en contextos laborales.</li>
                    <li>Identificar y gestionar riesgos en el ambiente de trabajo.</li>
                    <li>Manejar normativas legales, informes técnicos y emergencias.</li>
                  </ul>
                </ul>
              </div>

              {/* Acordeón con contenido programático */}
              <div className="mt-8">
                <details className="bg-white shadow-md p-6 rounded-lg">
                  <summary className="cursor-pointer font-semibold text-blue-600">
                    Ver contenido del programa
                  </summary>
                  <ul className="mt-4 list-disc space-y-2 ml-6 text-gray-700">
                    <li><strong>Unidad I:</strong> Fundamentos de la Enfermería Laboral</li>
                    <li><strong>Unidad II:</strong> Legislación Laboral en Enfermería</li>
                    <li><strong>Unidad III:</strong> Prevención y Gestión de Riesgos Laborales</li>
                    <li><strong>Unidad IV:</strong> Emergencias y Primeros Auxilios en el Trabajo</li>
                    <li><strong>Unidad V:</strong> Patologías y Urgencias Laborales</li>
                  </ul>
                </details>
              </div> 
            </div>

            <div className="relative">

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Modalidad Híbrida</h3>
                    <p className="text-gray-600">Modalidad Virtual con seminarios presenciales</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Metodología Innovadora</h3>
                    <p className="text-gray-600">Combinamos material actualizado, estudio de casos y certificación oficial.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Red de Expertos</h3>
                    <p className="text-gray-600">Docentes especializados con amplia experiencia clínica.</p>
                    <p className="text-gray-600">Clases en vivo con especialistas en salud laboral.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="h-4 w-4 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Metodología Activa</h3>
                    <p className="text-gray-600">Clases teóricas, talleres prácticos, estudio de casos y trabajo final integrador.</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#contacto">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      Incribirse Ahora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>



      {/* Testimonials Section */}
      <section id="testimonios" className="py-20 ">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">Testimonios</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Lo que dicen nuestros estudiantes</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "El programa de Capacitación en Diagnósticos transformó mi práctica profesional. Los conocimientos
                  adquiridos me han permitido brindar mejor atención a mis pacientes."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">MG</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Dr. María González</div>
                    <div className="text-sm text-gray-600">Cardióloga</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "La modalidad híbrida me permitió continuar trabajando mientras me especializaba. El nivel académico
                  es excepcional y los docentes son de primer nivel."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">CM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Dr. Carlos Mendoza</div>
                    <div className="text-sm text-gray-600">Director Médico</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "CICCE me brindó las herramientas necesarias para desarrollar mi carrera en investigación. Hoy lidero
                  proyectos importantes gracias a su formación."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">AR</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Dra. Ana Rodríguez</div>
                    <div className="text-sm text-gray-600">Investigadora</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">¿Listo para impulsar tu carrera profesional?</h2>
            <p className="text-xl text-blue-100">
              Únete a más de 500 profesionales que han transformado su práctica médica con CICCE
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contacto">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Solicitar Información
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#programas">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-black hover:bg-white hover:text-blue-600"
                >
                  Ver Programas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Contacto</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Estamos aquí para ayudarte</h2>
                <p className="text-lg text-gray-600">
                  Nuestro equipo de asesores académicos está disponible para resolver todas tus dudas y ayudarte a
                  elegir el programa que mejor se adapte a tus objetivos profesionales.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Teléfono</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">info@cicce.edu</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle>Solicita Información</CardTitle>
                <CardDescription>Completa el formulario y nos pondremos en contacto contigo</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Nombre</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Apellido</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Tu apellido"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="tu@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Programa de Interés</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Selecciona un programa</option>
                    <option>Enfermería Laboral</option>
                    <option disabled>Capacitación en Diagnósticos</option>
                    <option disabled>Investigación Clínica</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Mensaje</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Cuéntanos sobre tus objetivos profesionales..."
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">Enviar Solicitud</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="text-xl font-bold">CICCE</span>
              </div>
              <p className="text-gray-400">
                Centro de referencia en educación continua para profesionales de la salud.
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CICCE. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
