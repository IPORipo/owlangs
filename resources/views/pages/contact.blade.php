@extends('layouts.master')

@section('title')
    Home
@endsection

@section('content')
    <form action="{{route('sendmail')}}" method="GET">
        <input type="text" name="title">
        <input type="email" name="email">
        <input type="textarea" name="msg">
        <input type="submit">
    </form>
@endsection